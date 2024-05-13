import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify, sign } from 'hono/jwt';
import { userRouter } from './routes/userRouter';
import { blogRouter } from './routes/blogRouter';
import { cors } from 'hono/cors';

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>()

app.use('/*',cors());
app.route('/api/v1/user',userRouter);
app.route('/api/v1/blog',blogRouter);

export default app


// postgresql://test_owner:BFHS3vYWitV6@ep-dark-fog-a57rqn0y.us-east-2.aws.neon.tech/medium?sslmode=require
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMGE4NmRiYTctYzVjYS00MTI5LWI5MTYtMjBlMTY4OTBjZmY0IiwidGVuYW50X2lkIjoiY2JjYzIzNWNjZTNkYzEyZmUxZTc3M2U2ZTA2MmQxMDAwZjE3Yjk5MzRiZDAyOTM0YTYyZjkxMGQzZWYzMTNiZSIsImludGVybmFsX3NlY3JldCI6ImQwM2UzMzRjLWI5OGItNDc2Zi1hZDMyLWNhNWQzYWU3MjRmYSJ9.Ghmt6Co_8-v5WFGx96I-EedPRcCq6IxgBc0a1de34pg"