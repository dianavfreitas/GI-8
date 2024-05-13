function createPatient(name, ssn) {
    // Private object PII (Personally Identifiable Information)
    const PII = {
        name: name,
        SSN: ssn
    };

    function getName() {
        return PII.name;
    }
    function getSSN() {
        return PII.SSN;
    }
    return {
        getName: getName,
        getSSN : getSSN
    };
}

const patient2 = createPatient("John", "123-45-6789");

console.log(patient2.getName());
console.log(patient2.getSSN());