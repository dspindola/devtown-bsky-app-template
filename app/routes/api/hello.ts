import { json } from "@tanstack/start";
import { createAPIFileRoute } from "@tanstack/start/api";

export const APIRoute = createAPIFileRoute("/api/hello")({
  GET: ({ request, params }) => {
    console.log(params,request);
    
    return json({ message: 'Hello "/api/hellos"!' });
  },
});
