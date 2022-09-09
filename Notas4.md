El <TextInput> tiene 2 eventos disponibles:

onChange:
Retorna una función de callback cada vez que el valor del TextInput cambie.

onChangeText:
Nos retorna directamente el valor en un string de lo que escribimos dentro del campo.
*onChangeText={(text) => setTask(text)}*

-Para hacer testeos al momento podemos usar (funciona como console.log):
  console.warn()

-Copiar el estado previo de nuestro estado, una copia EXACTA de nuestro estado anterior:
  setTasks((prevTasks) => [
    ...prevTasks,
    { id: Date.now(), value: task }
  ]);

-Para crear una Lista optimizada y que solo se renderice cuando se agrega un elemento, el elemento final y no todos los anteriores. Vamos a usar *FlatList*:
  <FlatList 
  data={tasks} // Los datos que vamos a estar renderizando
  renderItem={renderItem} // Renderiza un componente de react por cada uno de los elementos en esta lista.
  keyExtractor={(item) => item.id.toString()}/> // El keyExtractor va a asignarle una key a cada elemento de la lista

-*renderItem* va a ser una funcion que toma como parametro un objeto con el elemento que recibe de esa lista

  const renderItem = ({ item }) => (
    <View key={`item-${item.id}`} style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
    </View>
  )