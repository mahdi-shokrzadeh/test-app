import NotForud from "../assets/no-found.gif";


const NotFound = () => {
    return (
        <div className="text-center py-5">
            <p className="h3 text-warning ">صفحه مورد نظر یافت نشد.</p>
            <img src={NotForud} alt="یافت نشد" className="img w-25" />
        </div>
    );
};
 export default NotFound ;
