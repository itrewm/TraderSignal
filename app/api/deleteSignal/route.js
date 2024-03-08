
import { NextRequest, NextResponse } from "next/server";
import {Signal} from "@/app/libs/models"
import {connectToDB} from "../../libs/utils"
import mongoose from 'mongoose'; // Import mongoose for access to CastError


// Handles DELETE requests to /api
export async function DELETE(request) {
    try {
        connectToDB();
        const id = request.nextUrl.searchParams.get('id');
        const deletedPackage = await Signal.findByIdAndDelete(id);
        
        return NextResponse.json({ message: "Signal deleted successfully" });
    
    } catch (error) {
        // Handle CastError specifically

        if (error instanceof mongoose.Error.CastError) {
            return NextResponse.json({ message: "Signal not found" }, { status: 404 });
          }
           
        throw new Error(error);
    }
}