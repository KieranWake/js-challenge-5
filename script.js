function whichIsLarger(f, g) {
    //First, we instantiate two arrow functions inside our parent function -
    //Use ternary operators with greater than operators to compare the two.

    const firstFunction = () => f; 
    const secondFunction = () => g; 

    if (f > g) {
        return "f"; 
    } else if (g > f) {
        return "g";
    } else {
        return "neither"; 
    }
}