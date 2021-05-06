function main(){
    var test = [];
    var img = document.createElement("img");
    var img2 = document.createElement("img");
    var img3 = document.createElement("img");
    var img4 = document.createElement("img");
    var img5 = document.createElement("img");
    img.src = "https://images.photowall.com/products/58341/foggy-forest-4.jpg?h=699&q=85";
    img2.src = "https://images.photowall.com/products/58341/foggy-forest-4.jpg?h=699&q=85";
    img3.src = "https://images.photowall.com/products/58341/foggy-forest-4.jpg?h=699&q=85";
    img4.src = "https://images.photowall.com/products/58341/foggy-forest-4.jpg?h=699&q=85";
    img5.src = "https://images.photowall.com/products/58341/foggy-forest-4.jpg?h=699&q=85";
    test.push(img);
    test.push(img2);
    test.push(img3);
    test.push(img4);
    test.push(img5);
    var src = document.getElementById("images");
    test.forEach(element => src.appendChild(element));
}


main();