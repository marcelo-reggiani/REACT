// Objetivo desse arquivo é ter todas as funções relacionadas a autenticação
    // Criar usuário com email/senha/nome
    // Entrar com o google
    // Entrar com o email e senha
    // Logout

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "./config"

    export async function cadastrarUsuario(nome, email, senha) {
        // Indicamos o serviço de autenticação e o email e senha do novo usuário
        // user é um objeto com o informações do usuário autenticado
        const{ user } = await createUserWithEmailAndPassword(auth, email, senha)
        // Define o nome de exibição como o nome vindo do formulario de cadastro
        await updateProfile(user, {displayName: nome});
    }

    // Função para fazer login usando o email do google
    export async function entrarGoogle() {
        // Indicar qual provedor de login será usado
        const provider = new GoogleAuthProvider();
        // Abre o pop-up na tela com o login do google
        await signInWithPopup(auth, provider);
    }

    export async function loginUsuario(email, senha){
        await signInWithEmailAndPassword(auth, email, senha);
    }

    export async function logout() {
        // Essa função serve para deslogar o usuário da aplicação
       await signOut(auth)
    }