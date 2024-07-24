import Button from "./UI/Button";
import { signIn } from "next-auth/react";

export default function LoginForm() {

  return (
    <form className=" flex flex-col w-72 h-72 justify-center gap-6">
      <input className=" p-3 bg-black/20 placeholder-white rounded-sm" type='text' placeholder='Nombre:' />
      <input className=" p-3 bg-black/20 placeholder-white rounded-sm" type='text' placeholder='Contraseña:' />
      <Button type="submit" text="Iniciar Sesión"/>
      <Button onClick={() => signIn()} type="button" text="Iniciar con Google"/>
    </form>
  )
}
