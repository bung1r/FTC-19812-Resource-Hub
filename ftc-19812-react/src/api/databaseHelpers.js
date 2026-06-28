import {supabase} from "../lib/supabase"

export async function updateDatabase(from, key, value, row) {
    return await supabase
    .from(from)
    .update({ [key]: value })  
    .eq("id", row);        
}

export async function updateDatabaseComplex(from, value, eqKey, eqValue) {
    return await supabase
    .from(from)
    .update(value)  
    .eq(eqKey, eqValue);     
}

export async function addToDatabase(from, value) {
    return await supabase
    .from(from)
    .insert([value]);
}

export async function removeFromDatabase(from, row) {
    return await supabase
    .from(from)
    .delete()
    .eq("id", row);
}

export async function checkFromDatabase(from, key, value) {
    return await supabase
    .from(from)
    .select("*")
    .eq(key, value)
    .maybeSingle();
}

