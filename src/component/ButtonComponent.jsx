import Button from "react-bootstrap/Button";
export default function ButtonComponent({
  children,
  onBotonClick,
  variant = "light",
  type = "button"
}) {
  
  return (
    <Button onClick={onBotonClick} variant={variant} type={type}>
      {children}
    </Button>
  );
}
