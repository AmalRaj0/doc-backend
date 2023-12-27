const jsonserver=require ("json-server")
const docServer=jsonserver.create()
const middleware=jsonserver.defaults()
const route=jsonserver.router("db.json")
const port =3001
docServer.use(middleware)
docServer.use(route)
docServer.listen(port,()=>{
    console.log("port is ready to run");
})