import React from 'react'
import './AddProduct.css'
import { v4 as uuidv4 } from "uuid";


const AddProduct = ({ Products, setProducts }) => {
    const productName = document.querySelector("#productName");
    const productPrice = document.querySelector("#productPrice");
    const productImageURL = document.querySelector("#ProductImage-URL");
    const productImage = document.querySelector("#productImage");
    var img;
    const productDesc = document.querySelector("#productDesc");
    const productCategory = document.querySelector("#productCategory");
    const reader = new FileReader();

    var status = false

    const openFile = (event) => {
      var input = event.target;

      reader.onload = function () {
        var dataURL = reader.result;
        var output = document.getElementById("output");
        output.src = dataURL;
        img = dataURL
      };
      
      reader.readAsDataURL(input.files[0]);
    };

    const openURL = (e) =>{
        var output = document.getElementById("output");
        output.src = e.target.value;
    }

    

  const handleProductAdd = (e) => {
    e.preventDefault();
    
    if(status == false){
        productName.value ? console.log("Ok") : alert("Preencha corretamente os campos, o nome do produto é obrigatório")
        productPrice.value
          ? console.log("Ok")
          : alert(
              "Preencha corretamente os campos, o valor do produto é obrigatório"
            );
        productDesc.value
          ? console.log("Ok")
          : alert(
              "Preencha corretamente os campos, a descrição do produto é obrigatória"
            );
        productImage.value
          ? console.log("Ok")
          : productImageURL.value
          ? console.log("Ok")
          : alert(
              "Preencha corretamente os campos, a imagem do produto é obrigatória"
            );
        
    }


    const newProduct = [
      ...Products,
      {
        id: uuidv4(),
        category: productCategory.selectedOptions[0].value,
        image: productImage.value ? productImage.value : img,
        Name: "Boneco Dart Maul",
        Price: 109.9,
        Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        FullDesc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
      },
    ];




  };

  return (
    <div className="container AddProduct-container">
      <h1>Adicionar Novo Produto</h1>
      <img id="output" />

      <form className="addProductForm">
        <label htmlFor="productImage" className="productImageLabel">
          Selecionar um arquivo &#187;
        </label>
        <input
          id="productImage"
          type="file"
          accept="image/*"
          onChange={openFile}
        ></input>

        <label htmlFor="productImage-URL">Ou cole aqui a URL da imagem</label>
        <input
          type="url"
          name="productImage-URL"
          id="ProductImage-URL"
          placeholder="https://linkdaimagem.com.br"
          onChange={openURL}
        />

        <label htmlFor="productCategory">Categoria</label>
        <select name="productCategory" id="productCategory" required>
          <option value="StarWars">Star Wars</option>
          <option value="Console">Console</option>
          <option value="Diversos">Diversos</option>
        </select>

        <label htmlFor="productName">Nome do Produto</label>
        <input
          type="text"
          name="productName"
          id="productName"
          placeholder="Funko Pop Dart Vader"
          maxLength="20"
          required
        />

        <label htmlFor="productPrice">Preço</label>
        <input
          type="number"
          name="productPrice"
          id="productPrice"
          placeholder="60.25"
          required
        />

        <label htmlFor="productDesc">Descrição</label>
        <textarea
          name="productDesc"
          id="productDesc"
          placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iure porro est alias a hic quod saepe delectus iusto. Nobis eveniet cupiditate ea ipsa reprehenderit vero eum deleniti. Quis, mollitia?"
          maxLength="150"
          required
        ></textarea>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleProductAdd}
        >
          Adicionar Produto
        </button>
      </form>
    </div>
  );
};

export default AddProduct