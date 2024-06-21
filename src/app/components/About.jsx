const About = () => {
    return ( 
        <div className="flex flex-wrap justify-center p-28 max-sm:p-0 max-md:p-10" id="sobre">
            <div className="mt-16">
                <h1 className="text-yellow-200 font-abc text-5xl font-semibold text-center">
                    Sobre
                </h1>
                <p id="p-sobre" className="animate fadeInLeft three leading-7 tracking-wide text-lg">
                    Olá, me chamo Lucas Sampaio. O meu interesse pela programação surgiu porque eu sempre me fazia essa pergunta: como os jogos e aplicativos são criados? Desde então, comecei a estudar engines como Unity e Unreal, mas era apenas um hobby. Até que parei de estudar engines e comecei a buscar cursos online. Nessa busca, conheci o front-end e me apaixonei logo de cara. Sempre foi o meu ponto forte, mas entendo um pouco de back-end. Atualmente, uso Next.js e Tailwind CSS em projetos como principais ferramentas. Realizei alguns freelances e fui professor de front-end na Compilando Já, em Vila Velha. Atualmente, estou buscando um novo desafio.
                </p>
            </div>
        </div>
     );
}
 
export default About;