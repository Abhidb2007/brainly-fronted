export interface ButtonProps{
    variant: "primary" |"secondary";
    size:"sm"|"md"|"lg";
    text:"string";
    startIcon?:any;
    endIcon?:any;
    onClick:()=>void;

}
const variantStyles={
    "primary": "bg-purple-600 text-white",
    "Secondary": "bg-purple-100 text-purple-700"
}
const sizeStyles={
  "sm": "p-2",
  "md": "p-3",
  "lg": "p-4"

}
export const Button=(props: ButtonProps)=>{
  return <button className={'${variantStyles[props.variant]}$
  {defaultStyles} ${sizeStyles[props.size]}'}>{props.text}</button>  
}
<Button variant="primary" size="md"  onClick={()=>{}} text={"asd"}/>