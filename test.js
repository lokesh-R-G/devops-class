const greet =require('./App');

if (greet()==="hello"){
    console.log("✔️");
    ProcessingInstruction.exit(0);
}else{
    console.log("❌");
    ProcessingInstruction.exot(1);
}