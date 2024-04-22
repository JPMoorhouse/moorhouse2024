export function getBlockValueByDiscriminant(blocks: any, discriminant: any) {
  const block = blocks.find(
    (block: any) => block.discriminant === discriminant
  );
  return block ? block.value : null;
}
