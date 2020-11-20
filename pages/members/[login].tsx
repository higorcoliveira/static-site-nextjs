import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

function Member() {
    const { query } = useRouter();

    return (
        <div>
            <h1>{query.login}</h1>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { login: 'higor' } }
        ],
        fallback: true // se não existir ele busca o valor no backend
    }
}

// exemplo de dado passado vi parametro na url
export const getStaticProps: GetStaticProps = async (context) => {
    const { login } = context.params;

    return {
        props: {
            user: login
        }
    }
}

export default Member;