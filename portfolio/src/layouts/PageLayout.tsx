import NavBar from "../components/organisms/NavBar/NavBar";

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="page-layout">
            <NavBar />
            <main className="flex flex-col gap-lg my-[6rem] mx-auto ">
                {children}
            </main>
        </div>
    );
}