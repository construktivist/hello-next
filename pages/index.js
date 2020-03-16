//Dependencies
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

//Components
import Layout from '../components/MyLayout';

// ======== FETCHING DATA FOR PAGES =========
//
const Index = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

// ======== LINKS WITH DYNAMIC ROUTING =========
//
// const PostLink = props => (
//     <li>
//         <Link href="/p/[id]" as={`/p/${ props.id }`}>
//             <a>{props.id}</a>
//         </Link>
//     </li>
// );


// export default function Blog() {
//     return (
//         <Layout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink id="hello-nextjs" />
//                 <PostLink id="learn-nextjs" />
//                 <PostLink id="deploy-nextjs" />
//             </ul>
//         </Layout>
//     );
// }

// ======== LINKS WITH STATIC ROUTES =========
//
// const PostLink = props => (
//     <li>
//         <Link href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// );
// export default function Blog() {
//     return (
//         <Layout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink title="Hello Next.js" />
//                 <PostLink title="Learn Next.js is awesome" />
//                 <PostLink title="Deploy apps with Zeit" />
//             </ul>
//         </Layout>
//     );
// }

//========== BASIC PAGE EXAMPLE ============
// export default function Index() {
//     return (
//         <div>
//             <Layout>
//                 <p>Hello Next</p>
//             </Layout>
//         </div>
//     );
// }