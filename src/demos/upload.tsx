import Upload from "../components/Upload";

const UploadDemo = () => {
	function handleBeforeUpload(file: File) {
		let newFile = new File([file], "file", { type: file.type });
		return Promise.resolve(newFile);

		/* if (file.size > 1024 * 1024) {
			alert("文件超过了1M");
			return false;
		}
		return true; */
	}

	return (
		<div className="m-10">
			<Upload
				action="http://localhost:3100/files/upload"
				// action="http://localhost:3000/request/upload"
				// action="http://0.0.0.0:3200/files/v3/files"
				// action="https://run.mocky.io/v3/3712e2a8-3b41-4f4b-ab7b-9a4e5eb4d4b9"
				// action="http://localhost:3000/v2/5cc8019d300000980a055e76"
				// action="https://jsonplaceholder.typicode.com/posts"
				beforeUpload={handleBeforeUpload}
				onProgress={(percentage, file) => {
					// console.log("onProgress:", percentage);
				}}
				onSuccess={(res, file) => {
					console.log("onSuccess:");
				}}
				onError={(error, file) => {
					console.log("onError:", error);
				}}
			/>
		</div>
	);
};

export default UploadDemo;