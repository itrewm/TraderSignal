
import { NextRequest, NextResponse } from "next/server";
import {Package} from "@/app/libs/models"
import {connectToDB} from "../../libs/utils"
import mongoose from 'mongoose'; // Import mongoose for access to CastError


// Handles DELETE requests to /api
export async function DELETE(request) {
    try {
        connectToDB();
        const id = request.nextUrl.searchParams.get('id');
        const deletedPackage = await Package.findByIdAndDelete(id);
        
        return NextResponse.json({ message: "Package deleted successfully" });
    
    } catch (error) {
        // Handle CastError specifically

        if (error instanceof mongoose.Error.CastError) {
            return NextResponse.json({ message: "Package not found" }, { status: 404 });
          }
           
        throw new Error(error);
    }
}