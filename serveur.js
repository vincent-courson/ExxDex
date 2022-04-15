var fs = require('fs');
var express = require('express');
var http = require('http');
var path = require('path');
var app =express();
var serve_static = require('serve-static')
app.use(serve_static(__dirname+"/public"));

var serveur = http.Server(app);
serveur.listen(8080,function(){
    console.log("Serveur en écoute sur le port 8080");
});

let database = JSON.parse(fs.readFileSync('pokedex.json'));

app.get('index.html',function(req,res){
    fs.readFile(__dirname+'/public/index.html', function(err, data)
    {
        if (err)
        {
            res.writeHead(200, {"Content-type": "text/plain"});
            console.log('erreur');
            res.end("ERREUR !");   
        //Traitement de l'erreur et envoie d'une réponse
        }
        else
        {
        //Ecriture de l'entête
            console.log("le fichiers est ouvert et un fichiers ");
            res.writeHead(200, {"Content-type": "text.html"});
            res.end(data, 'binary');
           
        //Envoi du contenu du fichier
        }
    })
});
app.get('/pokemons/all',function(req,res){
    let obj ={status:"OK",pokemon:[]};
    try{
        obj.pokemon=database.pokemons;
    }
    catch(e){
        obj.status="KO"
    }
    res.send(obj);
});

app.get('/pokemons/:type',function(req,res){
    let obj ={status:"OK",pokemon:[]};
    if (req.params.type == "all")
    {
        try{
            obj.pokemon=database.pokemons;
        }
        catch(e){
            obj.status="KO"
        }
        res.send(obj);
    }
    else
    {
        try{
            for(let i=0;i<database.pokemons.length;i++)
            {
                for(let j=0;j<database.pokemons[i].types.length;j++)
                {
                    if(database.pokemons[i].types[j].nom == req.params.type)
                        obj.pokemon.push(database.pokemons[i]);
                }
            }
        }
        catch(e){
            obj.status="KO"
        }
        res.send(obj);
    }
   
});
app.get('/types',function(req,res){
    let obj ={status:"OK",types:[]};
    try{
        for (let j=0;j<database.types.length;j++)
        {
            obj.types.push(database.types[j].nom);
        }
    }
    catch(e){
        obj.status="KO";
        console.log("KO");
    }
    res.send(obj);
});
app.get('/poke',function(req,res){
    res.send(database.pokemons);
});
app.get('/types/nom',function (req,res){
    res.send(database.types);
});

