var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var serveur = http.createServer(function(req, res)
{
    var requete = url.parse(req.url);
    var chemin = requete.pathname;
    var params = querystring.parse(requete.query);
    console.log("Requête d'un client !");
    res.writeHead(200, {"Content-type": "text/plain"});
    if(chemin=="/direBonjour")
    {
        if ("nom" in params && "prenom" in params)
        {
            res.end("Salut "+params.nom+' '+params.prenom+" !")
        }
        else
            res.end("ERREUR !");
    }
    else if (chemin=="/direAuRevoir")
    {
        if ("nom" in params && "prenom" in params)
        {
            res.end("Au revoir "+params.nom+' '+params.prenom+" !")
        }
        else
            res.end("ERREUR !");
    }
    else
    {
        res.end("ERREUR !");
    }
}
);
serveur.listen(8080);
console.log("Serveur en écoute sur le port 8080");