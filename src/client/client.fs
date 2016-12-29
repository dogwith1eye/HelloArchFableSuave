module Client

open Fable.Core
open Fable.Import

open Fable.Core.JsInterop
open Fable.Import.Browser

open Fable.Arch
open Fable.Arch.App
open Fable.Arch.Html

type Model = string

type Actions =
    | ChangeInput of string

let update model msg =
    match msg with 
    | ChangeInput str -> str

let inline onInput x = onEvent "oninput" (fun e -> x (unbox e?target?value))
let view model =
    div
        []
        [
            label 
                []
                [text "Enter name: "]
            input
                [
                    onInput (fun x -> ChangeInput x)
                ]
            br []
            span
                []
                [text (sprintf "Hello %s" model)]
        ]
createSimpleApp "" view update Virtualdom.createRender
|> withStartNodeSelector "#sample"
|> start