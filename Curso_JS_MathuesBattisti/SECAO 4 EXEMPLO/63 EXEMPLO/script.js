let nome = "Weverton";

for (let i = 0; i <10; i = i+1) {

    if( i == 5 ) {
        nome = "Daniel";
    }

    if (i == 6 && nome == "Daniel") {
        console.log("O nome é Daniel, pode parar");
        break;
    }

    console.log(i)

}