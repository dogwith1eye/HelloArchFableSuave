open Suave                 // always open suave
open Suave.Successful      // for OK-result
open Suave.Web             // for config
open Suave.Filters
open Suave.Operators
open System.IO

let app = 
    choose [
        path "/" >=> choose [
            GET >=> Files.browseFileHome "index.html"
        ]
        GET >=> Files.browseHome //serve up our bundle.js
        RequestErrors.NOT_FOUND "Page not found."
    ]

let config = 
  { defaultConfig with homeFolder = Some (Path.GetFullPath "../public") }

startWebServer config app