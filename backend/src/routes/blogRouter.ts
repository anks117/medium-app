import { Hono } from "hono";

import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";

export const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>()

blogRouter.use('/*', async(c,next)=>{
    
    const token= c.req.header('authorization') || "";
    try {
      const user=await verify(token,c.env.JWT_SECRET)

    if(user){
        c.set("userId",user.id);
        await next();
    }else{
        c.status(403);
        return c.json({msg:"you are not logged in"});
    }

    } catch (error) {
      c.status(403);
      return c.json({msg:'you are not logged in'})
    }
   
})

blogRouter.post('/', async(c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const userId=c.get('userId')
      const body=await c.req.json();

      try {
        const createdPost=await prisma.post.create({
          data:{
              title:body.title,
              content:body.content,
              authorId: Number(userId)
          }
        })
      
      return c.json({id: createdPost.id})
      } catch (error) {
        c.status(404);
        return c.json({error:error});
      }
  
  })
  
blogRouter.put('/',async(c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const body=await c.req.json();

      await prisma.post.update({
        where:{id:body.id},
        data:{
            title:body.title,
            content:body.content
        }
      })

    return c.text('Blog updated successfully!')
  })
  
blogRouter.get('/bulk', async(c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const blogs=await prisma.post.findMany({
        select:{
          title:true,
          content:true,
          id:true,
          author:{
            select:{
              name:true
            }
          }
        }
      })


    return c.json({blogs});
  })
  
blogRouter.get('/:id',async(c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const id=c.req.param('id');
      
      const blog=await prisma.post.findFirst({
        where:{id:Number(id)},
        select:{
          id:true,
          title:true,
          content:true,
          author:{
            select:{
              name:true
            }
          }
        }
      })

    return c.json({blog})
  })