
/**
 * Object properties, besides a value, have three special attributes (so-called “flags”):
 
    writable – if true, the value can be changed, otherwise it’s read-only.
    enumerable – if true, then listed in loops, otherwise not listed.
    configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

    The method Object.getOwnPropertyDescriptor allows to query the full information about a property.

    let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
 
 */

    let user = {
        name: "John"
      };
      
      let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

      console.log(descriptor) // { value: 'John', writable: true, enumerable: true, configurable: true }
 



