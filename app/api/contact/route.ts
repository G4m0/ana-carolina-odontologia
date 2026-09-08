import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/db";
import { contacts } from "@/db/schema";
const schema=z.object({name:z.string().trim().min(2).max(100),phone:z.string().trim().min(8).max(30),interest:z.string().trim().min(2).max(100),message:z.string().trim().max(1000).optional(),consent:z.union([z.literal("on"),z.literal(true)])});
export async function POST(request:Request){try{const data=schema.safeParse(await request.json());if(!data.success)return NextResponse.json({error:"Dados inválidos"},{status:400});await getDb().insert(contacts).values({name:data.data.name,phone:data.data.phone,interest:data.data.interest,message:data.data.message||null,createdAt:new Date().toISOString()});return NextResponse.json({ok:true},{status:201})}catch(error){console.error("contact_submission_failed",error);return NextResponse.json({error:"Não foi possível enviar"},{status:500})}}
