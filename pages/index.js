//Dependencies
import Link from 'next/link';

//Components
import Header from '../components/Header';
import Layout from '../components/MyLayout';

export default function Index() {
    return (
        <div>
            <Layout>
                <p>Hello Next</p>
            </Layout>
        </div>
    );
}