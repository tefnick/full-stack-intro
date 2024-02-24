import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"

export async function POST(request) {
    console.log("creating a new post");
    const res = await request.json()
    const {title, content} = res;

    const result = await prisma.post.create({
        data: {
            title,
            content,
            author: {create: {
                name: 'Nick'
            }},
            published: true
        }
    });

    return NextResponse.json({result},{status: 201})
}