import { Hono } from "hono";

import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { signinInput, signupInput } from '@ank117/common'

export const userRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>();


userRouter.post('/signup', async(c)=>{

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body=await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
      c.status(400);
      return c.json({ error: "invalid input" });
    }
    
    try {
  
      const user= await prisma.user.create({
        data:{
          username:body.username,
          password:body.password,
          name:body.name || ""
        }
      })
      const jwt=await sign({id:user.id},c.env.JWT_SECRET)
      return c.text(jwt);
  
     
    } catch (error) {
      c.status(403)
      return c.text('invalid')
    }
  })
  
  
  userRouter.post('/signin', async(c)=>{
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
  
      const body=await c.req.json();
      const { success } = signinInput.safeParse(body);
      if (!success) {
        c.status(400);
        return c.json({ error: "invalid input" });
      }
  
      try {
  
        const user= await prisma.user.findFirst({
          where:{
            username:body.username,
          }
  
        })
        if(!user){
          c.status(403);
          return c.text('user not found');
        }
  
        const jwt=await sign({id:user.id},c.env.JWT_SECRET)
        return c.text(jwt);
       
      } catch (error) {
        c.status(403)
        return c.text('invalid')
      }
  
  
  })