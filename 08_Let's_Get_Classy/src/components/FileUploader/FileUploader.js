const FileUploader = () => {
    return (
        <div className="uploader">
            <h1>Uploader</h1>
            <form className = "uploaderForm" onClick={() => document.querySelector(".input-field").click()}>
                <input type="file" accept="image/*" className="input-field"/>
            </form>
        </div>
    )
};

export default FileUploader;