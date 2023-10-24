import React from 'react'; 
import '../../src/ProfileImage.css'

const ProductCard=({nome,imagem,descricao,preco,caracteristicas})=>{
    return(
        <div className='card'>
        <h2 className='nome'>{nome}</h2>
        <img src={imagem} className='imagem'></img>
        <p className='preco'>{preco}</p>
        <p className='descricao'>{descricao}</p>
        <p className='caracteristicas'>{caracteristicas}</p>
        </div>
    )
}

export default ProductCard