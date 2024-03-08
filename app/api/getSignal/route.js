// app/api/route.js

import { NextResponse } from "next/server";
import {Signal} from "@/app/libs/models"
import {connectToDB} from "../../libs/utils"

// Handles GET requests to /api
export async function GET(request) {
  
    try{
        connectToDB();
        //const signals = Signal.find().limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * ( page - 1));
        const signals = await Signal.find();
        return NextResponse.json(signals);
    }catch(error){
        throw new Error(error)
    }
  
}

