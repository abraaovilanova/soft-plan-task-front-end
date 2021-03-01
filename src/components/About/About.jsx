import React from 'react'
import './About.css'

export default ()=> {
    return (
        <div className="about-page">
            <h1>Desafio Técnico Front-End Pleno/Sênior</h1>
            <p>Feito por Abraão Vila Nova </p>
            <div className="about-content">
            <h2>Funcionalidades esperadas:</h2>
            <p>
                - Crie uma lista de cards para exibir os países mostrando a bandeira, o nome e a capital dele;
            </p>
            <p>
                - Possibilite o usuário buscar países;
            </p>
            <p>
                - Na lista, o usuário pode ir para a página de detalhes do país e ver uma lista mais completa de informações (bandeira, nome, capital, área, população e top-level domain);
            </p>
            <p>
                - Crie um formulário para editar os dados de um país (salvando apenas no client-side);
            </p>


            <h2>Restrições técnicas:</h2>
            <p>
                - Utilize o create-react-app como base;
            </p>
            <p>
                - Utilize redux para gerenciar o estado;
            </p>
            <p>
                - Utilize react-router para trocar de página;
            </p>
            <p>
                - Utilize @testing-library/react para testes;
            </p>

            <h2>Diferenciais:</h2>
            <p>
                - Crie uma pipeline no GitLab; (Exemplo: build => test => deploy);
            </p>
            <p>
                - Entregar o projeto publicado e funcionando em alguma URL;
            </p>
            <p>
                - Garanta 100% de cobertura no projeto com testes unitários;
            </p>
            <p>
                - Substituir o redux pelo Local state management do Apollo Client;
            </p>

            <h2>Desafio Super Front:</h2>
            <p>
                - Na tela de detalhes do país, adicionar um mapa mostrando a distância entre o país e os 5 países mais próximos;
            </p>
            </div>
        </div>
    )
}