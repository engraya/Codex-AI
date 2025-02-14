import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const data = await req.json();
        const prompt = `${data.body}. Write JSX code only with classnames and html tags necessary. Return Only output code.`;

        const result = await model.generateContent(prompt);
        const response = result.response;
        const code = await response.text();

        return NextResponse.json({ code });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
