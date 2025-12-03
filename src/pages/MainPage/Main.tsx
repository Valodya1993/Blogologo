import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Container } from "../../components/layout/wrapper";
import { posts } from "../../App";
import { Posts } from "../../components/posts/posts";
export const Main = () => {
    return (
        <>
            <Header />
            <Container> 
                {posts.map((post) => <Posts id={post.id} image={post.image} title={post.title} text={post.text} date={post.date} />)}
            </Container>
            <Footer />
        </>
    );
}