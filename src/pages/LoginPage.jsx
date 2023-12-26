import UserForm from "../components/UserForm";

export default function LoginPage(){
    return <>
        <div className="container mx-auto flex justify-center py-10">
            <UserForm login/>
        </div>
    </>
}