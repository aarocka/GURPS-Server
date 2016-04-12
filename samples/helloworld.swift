func hello(x: Int) -> String{
    var message=""
    for _ in 1...x {
        message+="Hello, world. "
    }
    return message
}

hello(6)
