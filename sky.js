
const WORKER_URL = "https://costate.pepitoalcachafa.workers.dev";

async function enviarFormulario(tipoFormulario, datos) {
  try {
    const respuesta = await fetch(`${WORKER_URL}?tipo=${tipoFormulario}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    });

    const resultado = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(resultado.error || "Error");
    }

    return { success: true, resultado };
  } catch (error) {
    throw error;
  }
}