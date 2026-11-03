export async function onRequest() {
  return new Response(JSON.stringify({
    ok: true,
    app: "MOHAVEX.DIGITAL",
    phase: 1,
    message: "API foundation is online. Authentication and payments are not enabled."
  }), {
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}
