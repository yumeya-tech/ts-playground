try {
    throw new Error('Something went wrong');
} catch (e: any) {
    console.error(e.message);
}
