export default function DesignSystem() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Design System</h1>

        {/* Colors Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Colors</h2>

          {/* Primary Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Primary Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                (shade) => (
                  <div key={shade} className="text-center">
                    <div
                      className={`w-16 h-16 bg-primary-${shade} rounded-lg border border-gray-200 mx-auto mb-2`}
                    ></div>
                    <p className="text-sm font-mono text-gray-600">
                      primary-{shade}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Semantic Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Success", class: "bg-green-500" },
                { name: "Warning", class: "bg-yellow-500" },
                { name: "Error", class: "bg-red-500" },
                { name: "Info", class: "bg-blue-500" },
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className={`w-16 h-16 ${color.class} rounded-lg border border-gray-200 mx-auto mb-2`}
                  ></div>
                  <p className="text-sm font-mono text-gray-600">
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Typography
          </h2>

          {/* Font Families */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Font Families
            </h3>
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 font-funnelDisplay">
                  Full Display Header - font-funnelDisplay
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  font-funnelDisplay (Full Display Header)
                </p>
              </div>
              <div>
                <p className="text-xl text-gray-800 font-redHatDisplay">
                  Red Hat Display - font-redHatDisplay
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  font-redHatDisplay (Red Hat Display)
                </p>
              </div>
            </div>
          </div>

          {/* Text Styles */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Text Styles
            </h3>
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 font-funnelDisplay">
                  Heading 1 - 4xl Bold (Full Display)
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  text-4xl font-bold font-funnelDisplay
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 font-funnelDisplay">
                  Heading 2 - 3xl Semibold (Full Display)
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  text-3xl font-semibold font-funnelDisplay
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-gray-900 font-funnelDisplay">
                  Heading 3 - 2xl Medium (Full Display)
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  text-2xl font-medium font-funnelDisplay
                </p>
              </div>
              <div>
                <p className="text-xl text-gray-800 font-redHatDisplay">
                  Body Large - xl Regular (Red Hat Display)
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  text-xl font-redHatDisplay
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-800 font-redHatDisplay">
                  Body Medium - lg Regular (Red Hat Display)
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  text-lg font-redHatDisplay
                </p>
              </div>
              <div>
                <p className="text-base text-gray-800 font-redHatDisplay">
                  Body Small - base Regular (Red Hat Display)
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  text-base font-redHatDisplay
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-redHatDisplay">
                  Caption - sm Regular (Red Hat Display)
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  text-sm font-redHatDisplay
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Components
          </h2>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                Primary Button
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                Secondary Button
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                Outline Button
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold mb-2">Card Title</h4>
                <p className="text-gray-600">
                  This is a sample card component with some content.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold mb-2">Another Card</h4>
                <p className="text-gray-600">
                  Cards can contain various types of content and layouts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold mb-2">Third Card</h4>
                <p className="text-gray-600">
                  Use cards to group related information together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Icons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Icons</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* You can add your actual icons here */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-500">📁</span>
              </div>
              <p className="text-sm text-gray-600">File</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-500">🌐</span>
              </div>
              <p className="text-sm text-gray-600">Globe</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-500">🪟</span>
              </div>
              <p className="text-sm text-gray-600">Window</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-500">📄</span>
              </div>
              <p className="text-sm text-gray-600">Document</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
