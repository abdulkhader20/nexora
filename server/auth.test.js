import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { signUpUser, loginUser } from './authStore.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storePath = path.join(__dirname, 'users.test.json');

const resetStore = async () => {
  await fs.writeFile(storePath, JSON.stringify([], null, 2));
};

test('signUpUser creates a hashed user account', async () => {
  await resetStore();
  const user = await signUpUser({
    fullName: 'Abdul',
    company: 'Aurel',
    email: 'abdul@example.com',
    password: 'secret123',
  }, storePath);

  assert.equal(user.email, 'abdul@example.com');
  assert.notEqual(user.password, 'secret123');
  assert.equal(user.fullName, 'Abdul');
});

test('loginUser validates a registered user', async () => {
  await resetStore();
  await signUpUser({
    fullName: 'Abdul',
    company: 'Aurel',
    email: 'abdul@example.com',
    password: 'secret123',
  }, storePath);

  const session = await loginUser({
    email: 'abdul@example.com',
    password: 'secret123',
  }, storePath);

  assert.equal(session.user.email, 'abdul@example.com');
  assert.ok(session.token.length > 10);
});
