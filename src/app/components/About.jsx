const About = () => {
    return ( 
        <div className="flex flex-wrap justify-center p-28 max-sm:p-0 max-md:p-10" id="sobre">
            <div className="mt-16">
                <h1 className="text-yellow-200 font-abc text-5xl font-semibold text-center">
                    Sobre
                </h1>
                <p id="p-sobre" className="animate fadeInLeft three leading-7 tracking-wide text-lg">
                    Olá, me chamo Lucas Sampaio, o meu interesse pela programação veio porque eu sempre me fiz essa pergunta, como os jogos e aplicativos foram criados ? desde então eu comecei a estudar engines como Unity, Unreal, mas era apenas como um hobby, até que eu parei de estudar engines e comecei a buscar cursos online, e nessa busca conheci o front end e me apaixonei logo de cara, sempre foi o meu ponto forte mas entendo um pouco do back end, atualmente usando Nextjs e Tailwindcss em projetos como principais ferramentas, realizei alguns freelances, fui professor de front end na Compilando Já em Vila velha, atualmente buscando por um novo desafio.
                </p>
            </div>
        </div>
     );
}
 
export default About;