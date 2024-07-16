// O proposito deste arquivo é ter todas as funções necessárias para gerenciar tarefas: (CRUD - Create, Read, Update, Delete)
// Função para Adicionar uma nova Tarefa (Create)
// Função para Listar as Tarefas do Banco (Read)
// Função para Atualizar a Tarefa (Update)
// Função para Deletar a Tarefa (Delete)

import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "./config";

// Criar uma referencia para a coleção no firestore
export const tarefasCol = collection(db, "tarefas")

// Função Assíncrona = O resultado não é obtido de imediato. Haverá uma "espera"
export async function addTarefa(data) {
    // Essa função comunica com o FileStore, Envia os dados(data) e salva na coleção indicada
    await addDoc(tarefasCol, data);
    // await é uma instrução para esperar o resultado de addDoc.
}

export async function getTarefas() {
    // Snapshot é o resultado da busca na coleção de tarefas
    const snapshot = await getDocs(tarefasCol);
    const tarefas = [];

    // Percorremos cada documento da coleção e inserimos no array de tarefas.  Ele adiciona o ID dentro do novo array
    snapshot.forEach(doc => {
        tarefas.push({...doc.data(), id: doc.id});
    })
    return tarefas;
}

export async function deleteTarefa(id) {
    // Cria uma referencia para um documento da coleção
    const tarefaDoc = doc(tarefasCol, id);
    // Deletar o documento da coleção de acordo com o id
    await deleteDoc(tarefaDoc)
}