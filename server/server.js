import express from 'express';
import cors from 'cors';
import { signUpUser, loginUser } from './authStore.js';

const app = express();
const PORT = 4000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ ok: true, message: 'Aurel auth service is running.' });
});

app.post('/api/auth/signup', async (request, response) => {
  try {
    const user = await signUpUser(request.body);
    response.status(201).json({
      message: 'Account created successfully.',
      user,
    });
  } catch (error) {
    response.status(400).json({
      message: error.message || 'Unable to create account.',
    });
  }
});

app.post('/api/auth/login', async (request, response) => {
  try {
    const session = await loginUser(request.body);
    response.json({
      message: 'Signed in successfully.',
      ...session,
    });
  } catch (error) {
    response.status(401).json({
      message: error.message || 'Unable to sign in.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Aurel auth server running on http://localhost:${PORT}`);
});
