Project Name: DevStack
Description: Explore react, handaling button, data fatching and tooling options side by side, and put together the stack that fits our next project.
Technology: React, Tailwind and DaisyUi
3 features about this project: 1. User can explore and add their personal stack
                               2. When a technologies add to stack add icon show and card border border colour show
                               3. Users can remove individual technologies or use Remove All to clear their entire stack.


i. JSX is a JavaScript xml code extention. JSX is directly inside the html write code.

ii.In React props are exinternal data passing parent to chail component and state are internal data manage dynamically.

iii.useState is a buld in react hook.useSate manage state for functional component.

iv.useEffect hook are syncronize our component with external system and handal effect in functional component

v.In UI frameworks like React, every item in a .map() list needs a unique key prop so that the virtual DOM can track individual elements when the list changes.

vi.Conditional rendering means showing defferent for UI element based on a conditions
  example:           <div className="mt-4 space-y-3">
            {selectedTechnologies.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-400 text-sm">
                  No technologies selected yet.
                </p>

                <p className="text-gray-400 text-xs mt-1">
                  Choose technologies from the list.
                </p>
              </div>
            ) : (
              selectedTechnologies.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center justify-between gap-3 border border-gray-200 rounded-lg p-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-8 h-8 object-contain"
                    />

                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm truncate">
                        {technology.name}
                      </h3>

                      <p className="text-xs text-gray-400">
                        {technology.category}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveTechnology(technology.id)}
                    className="btn btn-ghost btn-xs text-red-500"
                  >
                    <ImCross />
                  </button>
                </div>
              ))
            )}
          </div>


vii.Since React is follow unidirectional data .The parent adds a custom attribute or property to the child tag and than child receive an props and than child call the props when he use.
