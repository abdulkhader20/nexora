import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import bcrypt from 'bcryptjs';

const defaultStore = new URL('./users.json', import.meta.url);

const normalizePath = (filePath) => (filePath instanceof URL ? fileURLToPath(filePath) : filePath);

const ensureStore = async (filePath) => {
  const resolvedPath = normalizePath(filePath || defaultStore);
  try {
    await fs.access(resolvedPath);
  } catch {
    await fs.writeFile(resolvedPath, JSON.stringify([], null, 2), 'utf8');
  }
};

const readUsers = async (filePath = defaultStore) => {
  const resolvedPath = normalizePath(filePath);
  await ensureStore(resolvedPath);
  const contents = await fs.readFile(resolvedPath, 'utf8');
  const parsed = JSON.parse(contents || '[]');
  return Array.isArray(parsed) ? parsed : [];
};

const writeUsers = async (filePath, users) => {
  await fs.writeFile(normalizePath(filePath), JSON.stringify(users, null, 2), 'utf8');
};

const sanitizeUser = (user) => {
  const { password, ...safeUser } = user;
  return safeUser;
};

export async function signUpUser(payload, filePath = defaultStore) {
  const fullName = String(payload?.fullName || '').trim();
  const company = String(payload?.company || '').trim();
  const email = String(payload?.email || '').trim().toLowerCase();
  const password = String(payload?.password || '');

  if (!fullName || !company || !email || !password) {
    throw new Error('All fields are required.');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Please enter a valid email address.');
  }

  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters long.');
  }

  const users = await readUsers(filePath);
  if (users.some((user) => user.email.toLowerCase() === email)) {
    throw new Error('An account with that email already exists.');
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    id: crypto.randomUUID(),
    fullName,
    company,
    email,
    password: passwordHash,
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  await writeUsers(filePath, users);

  return sanitizeUser(user);
}

export async function loginUser(payload, filePath = defaultStore) {
  const email = String(payload?.email || '').trim().toLowerCase();
  const password = String(payload?.password || '');

  if (!email || !password) {
    throw new Error('Email and password are required.');
  }

  const users = await readUsers(filePath);
  const user = users.find((entry) => entry.email.toLowerCase() === email);

  if (!user) {
    throw new Error('No account found with that email.');
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new Error('Incorrect password.');
  }

  const token = crypto.randomBytes(24).toString('hex');

  return {
    token,
    user: sanitizeUser(user),
  };
}
