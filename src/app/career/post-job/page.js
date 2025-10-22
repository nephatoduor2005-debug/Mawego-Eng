export default function PostJob() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">Job Title</label>
          <input type="text" id="title" className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:ring-0" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium">Company</label>
          <input type="text" id="company" className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:ring-0" />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium">Location</label>
          <input type="text" id="location" className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:ring-0" />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">Job Description</label>
          <textarea id="description" rows="4" className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:ring-0"></textarea>
        </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}
