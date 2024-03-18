import React, {useState} from 'react'

interface Param {
    name: string
    value: string
}

interface Model {
    params: Param[]
}

const ModelEditor: React.FC<{initialModel: Model}> = ({initialModel}) => {
    const [model, setModel] = useState<Model>(initialModel);

    const updateParam = (index: number, value: string) => {
        const updatedParams = [...model.params]
        updatedParams[index].value = value
        setModel({...model, params: updatedParams})
    }

    const getModel = (): Model => {
        return model
    }

    return(
        <div>
        <h2>Model Editor</h2>
        {model.params.map((param, index) => (
          <div key={index}>
            <label htmlFor={`param-${index}`}>{param.name}</label>
            <input
              type="text"
              id={`param-${index}`}
              value={param.value}
              onChange={(e) => updateParam(index, e.target.value)}
            />
          </div>
        ))}
        <button onClick={() => console.log(getModel())}>Get Model</button>
      </div>
    )
}

const initialModel: Model = {
    params: [
        {name: 'Name', value: ''},
        {name: 'Description', value: ''},
        {name: 'Price', value: ''},
    ]
}

const App: React.FC = () => {
    return (
        <div>
          <ModelEditor initialModel={initialModel} />
        </div>
      );
}

